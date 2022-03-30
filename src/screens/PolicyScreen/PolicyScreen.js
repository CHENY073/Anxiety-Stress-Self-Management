/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';
import CustomButton from '../../components/CustomButton';

const PolicyScreen = ({ navigation }) => {

    const {height} = useWindowDimensions();
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
          
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
         
          <CustomButton text= "✖" onPress={() => navigation.navigate('Sign Up')} type="QUINARY"/>
          <Text style={styles.title}>
              Policy
          </Text>

          <Text>
          Copyright 2022 "Copyright Holder" {"\n"}{"\n"}
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. {"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.SubHeader}>
          Information that is gathered from visitors
          {"\n"}{"\n"}{"\n"}
          </Text>
          <Text>
          

In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.

Cookies may be used to remember visitor preferences when interacting with the website.

Where registration is required, the visitor's email and a username will be stored on the server.
{"\n"}{"\n"}

<Text style={styles.SubHeader}>
How the Information is used
{"\n"}
</Text>
{"\n"}

The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.

E-mail addresses will not be sold, rented or leased to 3rd parties.

E-mail may be sent to inform you of news of our services or offers by us or our affiliates.
{"\n"}{"\n"}
<Text style={styles.SubHeader}>
Visitor Options
{"\n"}
</Text>
{"\n"}

if you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive.

You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.{"\n"}
<Text style={styles.SubHeader}>
{"\n"}
Cookies
{"\n"}
</Text>
{"\n"}


Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website.

3rd party advertising companies may also use cookies for tracking purposes.{"\n"}
<Text style={styles.SubHeader}>
{"\n"}
Google Ads
{"\n"}
</Text>
{"\n"}


Google, as a third party vendor, uses cookies to serve ads.

Google's use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet.

Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
          </Text>
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      
    },

    logo: {
      maxWidth: 75,
      maxHeight: 100,
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 80,
      
    },
    SubHeader: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: -35,
      alignSelf: 'flex-start',
      
      
    }
  });
  

export default PolicyScreen;