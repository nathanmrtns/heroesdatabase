import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import IAppState from '../../store/IAppState.interface';

import './CharacterDetails.css';

import {
  getCharacterDetailsActionCreator
} from '../../actions/CharacterActionCreators';

import Loader from '../Loader/Loader';
import NavigationBar from '../NavigationBar/NavigationBar';
import PowerStatsItem from '../PowerStatsItem/PowerStatsItem';
import ICharacter from '../../sources/ICharacter.interface';

interface MatchParams {
  id: string
}

interface MatchProps extends RouteComponentProps<MatchParams> {
  params: MatchParams
}

interface IProps {
  getCharacterDetails: Function,
  character: any,
  isFetching: Boolean,
  match: MatchProps
}

export const CharacterDetails: React.FunctionComponent<IProps> = ({
  getCharacterDetails,
  character,
  isFetching,
  match
}) => {
  React.useEffect(() => {
    const charId = match.params.id
    getCharacterDetails(charId);
  }, [getCharacterDetails]);

  const renderPowerStats = (key: string) => {
    return <PowerStatsItem key={key} type={key} value={character.powerstats[key]} />
  }

  const renderStats = (stats: Record<string, any>) => {
    const capitalize = (word: string) => {
      return word[0].toUpperCase() + word.slice(1);
    }

    return <>
      {
        Object.keys(stats).map(key => {
          if (typeof stats[key] === "string") {
            return <><span className="label" key={key}>{capitalize(key)}:</span> <span>{stats[key]}</span><br/></>
          }
          return <><span className="label" key={key}>{capitalize(key)}:</span> <span>{JSON.stringify(stats[key])}</span><br/></>
        })
      }
    </>
  }

  return (
    <div className="characters-container">
      <NavigationBar>
        {/* Some logo maybe */}
      </NavigationBar>

      {isFetching || !(character)
        ? <Loader></Loader>
        : (
          <div className="details">
            <div>
              <div className="details__header">
                <img src={character.image.url}></img>
                <h1>{character.name}</h1>
              </div>
              <div className="details__powerstats">{
                Object.keys(character.powerstats).map(renderPowerStats)
              }
              </div>
            </div>
            <div className="details__char-info">
              <div className="details__char-info__biography">
                <h2>Biography</h2>
                {renderStats(character.biography)}
                {renderStats(character.work)}
                {renderStats(character.connections)}
              </div>
              <div className="details__char-info__appearance">
                {renderStats(character.appearance)}
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
