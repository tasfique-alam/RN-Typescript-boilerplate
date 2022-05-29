import { SignUpButton } from '@/components/core/Button';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Block from '@/components/core/Block';
import { Theme, ThemeParser, useStyles } from '@/components/hooks/useStyles';
import { useTheme } from '@/components/hooks';

const WelcomeScreen = ({ navigation }: any) => {

  const styles = useStyles(styleSheet);

  const { parseTheme } = useTheme();


  return (
    <>
      <Block style={styles.container}>
        <Block style={styles.btnBlock}>
          <Block style={{ marginBottom: 18 }}>

            <SignUpButton
              width={'100%'}
              height={50}
              radius={6}
              bgColor={parseTheme('#000', '#B857E0')}
              text="Sign Up"
              customTextColor={styles.textStyleSignUp}
            />

          </Block>
          <Block>

            <SignUpButton
              width={'100%'}
              height={50}
              radius={6}
              borderColor={parseTheme('#000', '#B857E0')}
              text="Sign In"
              customTextColor={styles.textStyle}
            />

          </Block>
        </Block>
      </Block>
    </>
  );
};
const styleSheet = (theme: Theme, parseTheme: ThemeParser) => {

  return StyleSheet.create({

    container: {
      backgroundColor: parseTheme('#fff', '#292929'),
      height: '100%',
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      backgroundColor: parseTheme('#fff', '#292929'),
      height: '65%',
      width: Dimensions.get('window').width,
      alignItems: 'center',
      paddingVertical: 30,
      justifyContent: 'center',
    },

    btnBlock: {
      marginTop: 10,
      paddingVertical: 30,
      width: Dimensions.get('window').width - 30,
    },
    textStyle: {
      color: parseTheme('#000', '#fff'),
    },
    textStyleSignUp: {
      color: parseTheme('#fff', '#fff'),
    },
  });
};

export { WelcomeScreen };
