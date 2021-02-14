import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container } from '../../components';
import { SocialIcon, Icon, Button } from 'react-native-elements';

/**
 * 아이콘 참고
 * https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/FontAwesome.json
 */

// import styled from 'styled-components/native';

// const ButtonWrapper = styled.View`
//   margin-top: 12px;
//   height: 52px;
//   width: 100%;
//   flex-direction: row;
//   background-color: red;
// `;

const styles = StyleSheet.create({
  socialButton: {
    width: 300,
  },
  buttonContainer: {
    width: 300,
  },
  buttonTitle: {
    marginHorizontal: 10,
  },
});

export function MyPage() {
  return (
    <Container>
      <Text>MyPage Screen</Text>
      <SocialIcon
        // style={styles.socialButton}
        title="Sign In With Google"
        button
        type="google"
        onPress={() => {
          console.log('google');
        }}
      />
      <SocialIcon
        // style={styles.socialButton}
        title="Sign In With Github"
        button
        type="github"
        onPress={() => {
          console.log('github');
        }}
      />
      <SocialIcon
        // style={styles.socialButton}
        title="Sign In With Twitter"
        button
        type="twitter"
        onPress={() => {
          console.log('twitter');
        }}
      />
      <Button
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        icon={
          <Icon
            name="envelope-square"
            type="font-awesome"
            size={20}
            color="white"
          />
        }
        title="Sign In With Email"
      />
    </Container>
  );
}
