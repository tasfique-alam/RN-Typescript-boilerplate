import React from 'react'
import { StyleSheet } from 'react-native'
import Block from '@/components/core/Block'
import { Theme, ThemeParser, useStyles } from '@/components/hooks'

function withMainLayout<P>(
  WrappedComponent: React.ComponentType<P>,
  options:
    | {
      hasIconPosition?: boolean;
    }
    | undefined = undefined,
): React.ComponentType<P> {
  return (props: P) => {
    const styles = useStyles(styleSheet);

    return (
      <React.Fragment>
        <WrappedComponent {...(props as P)} />
        <Block style={styles.container}>

        </Block>
      </React.Fragment>
    );
  };
}

const styleSheet = (theme: Theme, parseTheme: ThemeParser) => {
  return StyleSheet.create({

    container: {
      alignItems: 'center',
      position: 'absolute',
      height: 83,
      bottom: 0,
      flexDirection: 'row',
      width: '100%',
      zIndex: 999999,
      justifyContent: 'space-between',
      paddingHorizontal: 32,
      paddingBottom: 34,
      alignSelf: 'center',
      backgroundColor: parseTheme('#fff', '#1D1D1D'),
    },

  });
};

export { withMainLayout };
