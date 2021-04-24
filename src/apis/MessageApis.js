import { StyleSheet, Text, View } from "react-native";
import React from "react";
import base64 from 'react-native-base64'

export async function readGmailList(token, limit, pageToken) {
    var max = limit == 0 ? '' : 'maxResults=' + limit; //Append the limit to the query string only if there is defined limit
    var queryString = '?labelIds=INBOX'; //Set initial query string - Filtering only to INBOX
    if(max !== '') {
        queryString += '&' +  max;
    }
    if(pageToken != '') { //Utilize page token.
        queryString += '&pageToken=' + pageToken;
    }
    var messageListResponse;
    await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages' + queryString, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((response) => response.json()).then(response => {
            messageListResponse = response;
        }).catch((error) => {
            console.error(error);
        });
    var emails = [];
    for(let message of messageListResponse.messages) {
        var email;
        await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/' + message.id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token 
            }
        }).then((response) => response.json()).then(response => {
            var from = response.payload.headers.filter((header) => header.name == 'From');
            var to = response.payload.headers.filter((header) => header.name == 'To');
            var subject = response.payload.headers.filter((header) => header.name == 'Subject');
            var time = response.payload.headers.filter((header) => header.name == 'Date');
            email = {
                to: to.length > 0 ? to[0].value : '',
                from: from.length > 0 ? from[0].value : '',
                subject: subject.length > 0 ? subject[0].value : '',
                time: time[0].value,
                plainText: response.snippet //Using snippet for email text. This will usually take most of an email message for basic messages. 
            };
        }).catch((error) => {
            console.error(error);
        });
        emails.push(email);
    }

    return emails;
}

export async function sendBasicEmail(account, to, subject, content) {
    var fromLine = 'From: <' + account.email + '>';
    var toLine = 'To: <' + to + '>';
    var subjectLine = 'Subject: '+ subject;
    var preencodedEmail = fromLine + '\n' + toLine + '\n' + subjectLine + '\n\n' + content;
     
}