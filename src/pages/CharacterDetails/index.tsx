import React, {FunctionComponent} from 'react';
import { connect } from 'react-redux';
import { useParams} from 'react-router';

import IAppState from '../../store/IAppState.interface';

import {
  getCharacterDetailsActionCreator
} from '../../actions/CharacterActionCreators';

import Loader from '../../components/Loader';
import NavigationBar from '../../components/NavigationBar';
import PowerStatsList from '../../components/PowerStatsList';
import InfoList from '../../components/InfoList';

import './styles.css';

interface IProps {
  getCharacterDetails: Function,
  character: any,
  isFetching: Boolean,
}

export const CharacterDetails: FunctionComponent<IProps> = ({
  getCharacterDetails,
  character,
  isFetching,
}) => {
  const {charId} = useParams(); 

  React.useEffect(() => {
    getCharacterDetails(charId);
  }, [charId, getCharacterDetails]);

  return (
    <div className="characters-container">
      <NavigationBar/>
      {isFetching || !(character)
        ? <Loader></Loader>
        : (
          <div className="details">
            <div>
              <div className="details__header">
                <img src={character.image.url} alt={character.name}></img>
                <div className="details__header__name-stats-container">
                  <h1>{character.name}</h1>
                  <div className="powerstats">
                    <PowerStatsList character={character}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="details__char-info">
              <div className="details__char-info__biography">
                <h2>Biography</h2>
                <InfoList objProps={character.biography}/>
                <InfoList objProps={character.work}/>
                <InfoList objProps={character.connections}/>
              </div>
              <div className="details__char-info__appearance">
                <h2>Appearance</h2>
                <InfoList objProps={character.appearance}/>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    character: store.characterState.character,
    isFetching: store.characterState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacterDetails: (id: string) => dispatch(getCharacterDetailsActionCreator(id)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
