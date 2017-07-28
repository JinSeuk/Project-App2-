package com.example.ksy.myapplication;


import android.app.Activity;
import android.app.Notification;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v7.app.AppCompatActivity;

public class LogoActivity  extends AppCompatActivity {

     public void onCreate(Bundle savedInstanceState){
         super.onCreate(savedInstanceState);

         setContentView(R.layout.logo);

         Handler mhandler = new Handler()
         {
             @Override
             public void handleMessage(Message msg){
                 finish();

             }

         };
         mhandler.sendEmptyMessageDelayed(0,2000);


     }

}

