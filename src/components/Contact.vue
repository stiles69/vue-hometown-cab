<template>
  <div class='contact'>  
    <v-card raised color='white' height='auto'>
    <v-toolbar dark color='primary'>
      <v-toolbar-title class='title black--text' aria-label='Toolbar Contact'>
        Contact
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <p class='title'>        
        <v-icon>phone</v-icon>
        {{ telnum1 }}<span> </span>
        <v-icon>content_copy</v-icon>
      </p>
      <p class='title'>
        <v-icon>phone</v-icon>
        {{ telnum2 }}<span> </span>
        <v-icon>content_copy</v-icon>
      </p>
    </v-card-text>
    </v-card>
  </div>
</template>

<script>
import constants from './constants'
export default {
  name: 'Contact',
  data () {
      return {
        Owner: Constants.Owner,
        companyname: Constants.companyname,
        telnum1: Constants.telnum1,
        telnum2: Constants.telnum2,
        Hours1: Constants.hours[0],
        Hours2: Constants.hours[1],
        Hours3: Constants.hours[2],
        Hours4: Constants.hours[3],
        oneWayPrice: Constants.onewayprice,
        roundTripPrice: Constants.roundtripprice,
        additionalStopPrice: Constants.additionalstopprice
      }
    },
    components: Contact
  }
</script>

