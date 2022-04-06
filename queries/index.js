import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        artwork
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          id
          name
        }
      }
      moves {
        move {
          name
        }
        version_group_details {
          level_learned_at
          move_learn_method {
            name
          }
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
