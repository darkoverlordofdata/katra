REM TREK4


10  COM A$[20],B$[20],C$[20],M$[20],O$[20],P$[20]
12  COM Q$[20],R$[20],S$[20],V$[20],X$[72],Y$[72],Z$[72]
14  COM A[50],B[50],C[50],D[50],E[50],F[50],G[10],H[10],I[50],J[50]
16  COM K[50],L[50],M[10,6],N[10,4],O[10],P[10],Q[10,4],R[10,4]
18  COM S[10,8],T[10,9],U[10,6],V[10,6],W[10],X[50],Y[50],Z[10,10]
20  COM A,D1,D2,I,I1,I2,K1,K2,K3,K4,N,N1,N2,O,O1,O2,P1,P2,P3,P4
22  COM T0,T1,T2,T3,T4,T5,T6,T7,T8,T9
24  REM
26  REM    TREK73:  AN ADVANCED STAR TREK BATTLE SIMULATION
28  REM  PROGRAMMED BY WILLIAM K. CHAR AND ASSOCIATES, WILSON
30  REM  EDP, 400 MANSELL, SAN FRAN, CA 94134, (415) 230-6460
32  REM  26 NOVEMBER 1973 ***FOR AUTHORISED PERSONNEL ONLY***
34  REM
36  DEF FNA(X)=X*1.74533E-02
38  DEF FNB(X)=X*57.2958
40  DEF FNC(X)=X-INT(X*2.77778E-03)*360
42  DEF FNR(X)=INT(X*RND(1))+1
44  REM
7000  REM      ----- ORDER AND MOVEMENT ROUTINE -----
7005  D1=.25
7010  D2=2
7015  D3=D1*100
7020  FOR D=1 TO D2/D1
7025  FOR I=1 TO I1
7030  I0=I[I]
7035  IF NOT I0 THEN 7905
7040  M=V=I0-INT((I0-1)*.1)*10
7045  IF I0>10 THEN 7375
7050  IF  NOT Z[I,6] THEN 7675
7055  GOSUB 9050
7060  M$=V$
7065  J=I
7070  REM           ----- PHASER FIRING -----
7075  IF D>K1 THEN 7255
7080  FOR K=1 TO K1
7085  IF M[I,K]>99 THEN 7100
7090  NEXT K
7095  GOTO 7255
7100  GOSUB 9400
7105  IF M[I,K]<100 THEN 7255
7110  REM  (PHASER DAMAGES)
7115  M[I,K]=M[I,K]-100
7120  PRINT " >"'7M$" FRNG PHASERS<"'7
7125  FOR J=1 TO I1
7130  IF I=J OR  NOT I[J] THEN 7235
7135  GOSUB 9600
7140  IF F=0 THEN 7235
7145  V=I[J]-INT((I[J]-1)*.1)*10
7150  GOSUB 9050
7155  GOTO INT((I[J]-1)/10)+1 OF 7160,7200,7210,7220
7160  RESTORE 7165
7165  DATA 50,2,20,3,10,3
7170  DATA 1000,"COMPUTER DESTROYED."
7175  DATA 500,"SENSORS DEMOLISHED."
7180  DATA 100,"PROBE LAUNCHER CRUSHED."
7185  DATA 50,"WARP DRIVE DESTROYED."
7190  GOSUB 9800
7195  GOTO 7235
7200  PRINT V$"'S ENGINEERING HIT."
7205  GOTO 7225
7210  PRINT "HIT ON PROBE"J
7215  GOTO 7225
7220  PRINT "HIT ON TORPEDO"J
7225  F[J]=F[J]-F/2 MAX 0
7235  NEXT J
7240  Q[I,K]=Q[I,K]-F1
7245  GOTO 7375
7250  REM            ----- TORPEDO FIRNING -----
7255  IF D>K2 THEN 7375
7260  FOR K=1 TO K2
7265  IF T[I,K]>99 THEN 7280
7270  NEXT K
7275  GOTO 7375
7280  GOSUB 9500
7285  IF T[I,K]<100 THEN 7375
7290  IF V[I,K] THEN 7305
7300  GOTO 7375
7305  GOSUB 9200
7310  PRINT "<<"'7M$" FRNG TRPD ";
7311  PRINT  USING 7312;I3
7312  IMAGE  2D,">>"
7315  A[I3]=B[I3]=T[I,K2+1]
7320  C[I3]=D[I3]=FNC(U[J,K]+C[I])
7325  F[I3]=V[I,K]
7330  I[I3]=I0+30
7335  K[I3]=10000-T[I,K2+2]/D1
7340  L[I3]=T[I,K2+3]
7345  T[I,K]=T[I,K]-100
7350  V[I,K]=0
7355  X[I3]=X[I3]+A[I3]*COS(FNA(C[I3]))*D3
7360  Y[I3]=Y[I3]+A[I3]*SIN(FNA(C[I3]))*D3
7365  REM            ----- ANTIMATTER EFFECTS -----
7370  REM  (TIME FUSE)
7375  K0=K[I]=K[I]+1
7380  IF K0>10000 THEN 7450
7385  REM  (PROXIMITY FUSE)
7390  L0=L[I]
7395  IF  NOT L0 THEN 7675
7400  FOR J=1 TO I1
7405  J1=I[J]
7410  IF  NOT J1 THEN 7435
7415  IF J1>20 THEN 7435
7420  IF J1=M THEN 7435
7425  IF J=I THEN 7435
7430  IF L0>SQR((X[I]-X[J])^2+(Y[I]-Y[J])^2) THEN 7450
7435  NEXT J
7440  GOTO 7675
7445  REM  (DETONATION)
7450  V=M
7455  GOSUB 9050
7460  M$=V$
7465  GOTO INT((I0-1)*.1)+1 OF 7470,7510,7520,7530
7470  PRINT '7"+"'7"+"'7M$'7"+"'7"+"'7" DESTRUCT."
7475  FOR K=1 TO K1
7480  F[I]=F[I]+Q[I,K]
7485  NEXT K
7490  FOR K=1 TO K2
7495  F[I]=F[I]+V[I,K]
7500  NEXT K
7505  GOTO 7235
7510  PRINT '7"#"'7"#"'7M$"'S ENGINEERING"'7"#"'7"#"'7
7515  GOTO 7535
7520  PRINT "**"'7"  "I"**"'7
7525  GOTO 7535
7530  PRINT '7"::  "I'7"::"
7535  FOR J=1 TO I1
7540  IF I#ABS(J[J]) THEN 7550
7545  J[J]=0
7550  NEXT J
7555  REM  (ANTIMATTER DAMAGES)
7560  FOR J=1 TO I1
7565  IF I[J]=0 OR I=J THEN 7655
7570  GOSUB 9700
7575  IF F=0 THEN 7655
7580  V=I[J]-INT((I[J]-1)*.1)*10
7585  GOSUB 9050
7590  GOTO INT((I[J]-1)*.1)+1 OF 7595,7635,7645,7650
7595  RESTORE 7600
7600  DATA 100,3,10,2,7,6
7605  DATA 1500,"COMPUTER BANKS PIERCED."
7610  DATA 750,"SENSORS SMASHED."
7615  DATA 150,"PROBE LAUNCHER SHOT OFF."
7620  DATA 75,"WARP DRIVE DISABLED."
7625  GOSUB 9800
7630  GOTO 7655
7635  PRINT "HIT ON "V$"'S JETTISONED ENGINEERING"
7640  GOTO 7650
7645  PRINT "HIT ON PROBE"I
7650  K[J]=9999
7655  NEXT J
7660  I[I]=0
7665  GOTO 7905
7670  REM            ----- MOVEMENT SIMULATION -----
7675  A0=A[I]
7680  B0=B[I]
7685  C0=C[I]
7690  GOTO INT((I0-1)*.1)+1 OF 7695,7880,7850,7890
7695  D0=D[I]
7700  F0=F[I]
7705  J0=J[I]
7710  Z0=Z[I,4]
7715  REM  (FUEL CONSUMPTION)
7720  IF ABS(B0)<1 THEN 7760
7725  IF Z0 THEN 7750
7730  F[I]=F0=F0-ABS(B0)*E[I]*D1
7735  IF F0 >= 0 THEN 7760
7740  F[I]=0
7745  PRINT M$"'S WARP DRIVE BURNING OUT."
7750  B[I]=B0=SGN(B0)*(ABS(B0) MIN .99)
7755  REM  (AUTO PILOT)
7760  IF J0=0 THEN 7800
7765  J=ABS(J0)
7770  GOSUB 9100
7775  IF J0>0 THEN 7790
7780  D0=FNC(B+180)
7785  GOTO 7800
7790  D0=B
7795  REM  (TURN RATE)
7800  IF C0=D0 THEN 7880
7805  C1=FNC(D0-C0)
7810  IF C1<180 THEN 7820
7815  C1=C1-360
7820  C2=(10-ABS(B0))*5*D1
7821  IF J0=0 THEN 7825
7822  C2=C2+10
7825  IF  NOT Z0 THEN 7835
7830  C2=C2*.5
7835  C[I]=C0=FNC(C0+SGN(C1)*(ABS(C1) MIN C2))
7840  GOTO 7880
7845  REM  (PROBES)
7850  IF  NOT J[I] THEN 7890
7855  J=J[I]
7860  GOSUB 9100
7865  C0=B
7870  GOTO 7890
7875  REM  (ACCELERATION)
7880  A1=B0=A0
7885  A[I]=A0=A0+SGN(A1)*SQR(ABS(A1))*D1
7890  C3=FNA(C0)
7895  X[I]=X[I]+A0*COS(C3)*D3
7900  Y[I]=Y[I]+A0*SIN(C3)*D3
7905  NEXT I
7910  NEXT D
7915  REM     ----- DISTRIBUTION AND WEAPON LOCKS -----
7920  D4=D2
7925  FOR I=1 TO N
7930  IF  NOT I[I] OR I[I]>10 THEN 7985
7935  J=I
7940  GOSUB 9900
7945  FOR K=1 TO K1
7950  IF M[I,K]<0 THEN 7960
7955  GOSUB 9400
7960  NEXT K
7965  FOR K=1 TO K2
7970  IF T[I,K]<0 THEN 7980
7975  GOSUB 9500
7980  NEXT K
7985  NEXT I
7990  REM        ----- SELF-DESTRUCT WARNING -----
7995  IF I[1]#1 THEN 8025
8000  K0=(10000-K[1])*D1
8005  IF K0>15 THEN 8025
8010  IF K0=0 THEN 8025
8015  PRINT "COMPUTER:  "K0"SECONDS TO SELF-DESTRUCT."
8020  REM  (RUSES, BLUFFS, SURRENDERS)
8025  IF  NOT P1 THEN 8035
8030  P1=P1+1
8035  IF  NOT P2 THEN 8045
8040  P2=P2+1
8045  IF  NOT P3 THEN 8055
8050  P3=P3+1
8055  IF  NOT P4 THEN 8070
8060  P4=P4+1
8065  REM          ----- END GAME DECISION -----
8070  I=N1=N2=0
8075  REM  (FEDERATION DISPOSITION)
8080  IF I[1]#1 OR  NOT Z[1,6] THEN 8120
8085  IF F[1]>10 AND (Z[1,3]=0 OR Z[1,4]=0) OR G[1]>1 THEN 8130
8090  FOR K=1 TO K1
8095  IF Q[1,K] THEN 8130
8100  NEXT K
8105  FOR K=1 TO K2
8110  IF V[1,K] THEN 8130
8115  NEXT K
8120  O1=1
8125  REM  (ENEMY DISPOSITION)
8130  K0=K[1]
8135  FOR J=2 TO N
8140  IF I[J]=0 OR I[J]>10 OR  NOT Z[J,6] THEN 8195
8145  IF O1 THEN 8210
8150  R=SQR((X[I]-X[J])^2+(Y[1]-Y[J])^2)
8155  IF (R>4500 AND Z[J,4]) OR (R>5500 AND K0>100) THEN 8205
8160  IF F[J]>10 THEN 8210
8165  FOR K=1 TO K1
8170  IF Q[J,K] THEN 8210
8175  NEXT K
8180  FOR K=1 TO K2
8185  IF V[J,K] THEN 8210
8190  NEXT K
8195  N1=N1+1
8200  GOTO 8210
8205  N2=N2+1
8210  NEXT J
8215  IF O1=0 AND N1+N2<A THEN 8535
8220  IF O1=1 AND N1+N2<A THEN 8265
8225  IF O1=0 AND N1=A THEN 8245
8230  IF O1=0 AND N1+N2=A THEN 8255
8235  IF O1=1 AND N1=A THEN 8305
8240  GOTO 8265
8245  O1=2
8250  GOTO 8265
8255  O1=3
8260  REM  (ANYTHING OTHER THAN VESSELS REMAINING)
8265  FOR J=1 TO I1
8270  IF I[J]>10 THEN 8305
8275  NEXT J
8280  PRINT
8285  PRINT "STARFLEET COMMAND:  ";
8290  ENTER 3,T,A
8295  GOTO O1 OF 8345,8390,8425,8455,8490
8300  REM  (WARNING)
8305  IF O1=O2 THEN 8535
8310  O2=O1
8315  PRINT
8320  GOTO O1 OF 8325,8370,8410,8445,8475
8325  PRINT S$":  MESSAGE TO THE FEDERATION:  THIS IS COMMANDER "S$" OF"
8330  PRINT "   THE "R$" EMPIRE.  WE HAVE DEFEATED THE "P$" AND ARE"
8335  PRINT "   DEPARTING THE QUADRANT."
8340  GOTO 8535
8345  PRINT "WE HAVE RECEIVED CONFIRMATION THAT THE"
8350  PRINT "   USS "P$", CAPTAINED BY "N$", WAS DESTROYED"
8355  PRINT "   BY "R$" BATTLE CRUISERS.  MAY FUTURE FEDERATION"
8360  PRINT "   OPFFICERS PERFORM BETTER IN THEIR DUTIES."
8365  GOTO 8540
8370  PRINT "SPOCK:  ALL "R$" VESSELS HAVE BEEN EITHER DESTROYED OR"
8375  PRINT "   CRIPPLED.  WE STILL, HOWEVER, HAVE ANTIMATTE DEVICESTO"
8380  PRINT "   AVOID."
8385  GOTO 8535
8390  PRINT "WE COMMEND CAPTAIN "N$" AND HIS CREW"
8395  PRINT "   ON THEIR FINE ERFORMANCE AGAINST THE "R$"S.  MAY"
8400  PRINT "   HE BE AN INSPIRATION TO FUTURE STARSHIP CAPTAINS."
8405  GOTO 8540
8410  PRINT "SULU:  THE "R$"S ARE FALLING BEHIND AND SEEM TO BE"
8415  PRINT "   BREAKING OFF THEIR ATTACK."
8420  GOTO 8535
8425  PRINT "CAPTAIN "N$" OF THE STARSHIP "P$" HAS"
8430  PRINT "   OUT-MANUEVERED "R$" AGGRESSORS.  WE COMMEND HIS"
8435  PRINT "   TACTICAL ABILITY."
8440  GOTO 8540
8445  PRINT "UHURA:  I'M INFORMING STARFLEET COMMAND OF OUR DISPOSITION."
8450  GOTO 8535
8455  PRINT "CAPTAIN "N$" OF THE STARSHIP "P$" HAS"
8460  PRINT "   SURRENDERED HIS VESSEL TO THE "R$"S.  MAY CAPTAIN"
8465  PRINT "   DONSELL BE REMEMBERED."
8470  GOTO 8540
8475  PRINT "SPOCK:  ALTHOUGH THE "R$"S HAVE SURRENDERED, THERE ARE"
8480  PRINT "   ANTIMATTER DEVICES FLOATING AROUND US."
8485  GOTO 8535
8490  PRINT "WE HAVE RECEIVED WORD FROM THE "P$" THAT"
8495  PRINT "   THE "R$"S HAVE SURRENDERED."
8500  GOTO 8540
8505  PRINT
8510  PRINT "STARFLEET COMMAND:  ";
8515  ENTER 3,T,A
8520  PRINT "ONE OF OUR VESSELS HAS REPORTED THE WRECKAGE"
8525  PRINT "   OF THE "P$" AND  "A" OTHER VESSEL(S)."
8530  GOTO 8540
8535  CHAIN "*TREK0"
8540  PRINT
8545  L=0
8550  FOR I=1 TO N
8555  V=I[I]
8560  IF V=0 OR V>10 THEN 8590
8565  IF L THEN 8575
8570  PRINT "SURVIVORS REPORTED:"
8575  L=1
8580  GOSUB 9050
8585  PRINT "   "V$"--"Z[I,6]
8590  NEXT I
8595  IF L THEN 8605
8600  PRINT "*** NO SURVIVORS REPORTED ***"
8605  PRINT
8610  PRINT "COMPUTER:  DO YOU DESIRE ANOTHER BATTLE?"
8615  PRINT "FUTURE CAPTAIN:  [YES OR NO] ";
8620  ENTER T4,T,X$
8625  PRINT
8630  IF X$[1,1]="Y" THEN 8640
8635  STOP
8640  CHAIN "*TREK73"
9050  REM	  ----- NAME SELECTION SUBROUTINE -----
9052  RESTORE 9054
9054  DATA "BISMARK","CENTUAR","DRADDOCK","FORBIN","KREIGER","SHLURG"
9056  DATA "TRAKKA","VARNOR","WARRIOR"
9058  IF V>1 THEN 9064
9060  V$=P$
9062  RETURN
9064  FOR V2=2 TO V
9066  READ V$
9068  NEXT V2
9070  RETURN
9100  REM	  ----- BEARING SUBROUTINE -----
9102  X=X[J]-X[I]
9104  Y=Y[J]-Y[I]
9106  IF X=0 THEN 9112
9108  B=ATN(Y/X)*57.2958
9110  GOTO 9114
9112  B=90
9114  IF X >= 0 AND Y >= 0 THEN 9122
9116  B=B+180
9118  IF X<0 THEN 9122
9120  B=B+180
9122  RETURN
9200  REM	  ----- SLOT I SUBROUTINE -----
9202  FOR I3=1 TO I2
9204  IF I[I3]=0 THEN 9216
9206  NEXT I3
9208  PRINT
9210  PRINT "GAME WILL TERMINATE BECAUSE OF INABILITY TO COPE WITH"
9212  PRINT "ALL THE JUNK (VESSELS, PROBES, TORPEDOES, ETC) IN SPACE."
9214  STOP
9216  I[I3]=1000
9218  A[I3]=B[I3]=C[I3]=D[I3]=E[I3]=F[I3]=J[I3]=K[I3]=L[I3]=0
9220  X[I3]=X[I]
9222  Y[I3]=Y[I]
9224  FOR I1=I2 TO 1 STEP -1
9226  IF I[I1]>0 THEN 9230
9228  NEXT I1
9230  I[I3]=0
9232  RETURN
9400  REM	  ----- PHASER TRACKING SUBROUTINE -----
9402  J=M[I,K]
9404  IF J<100 THEN 9408
9406  J=J-100
9408  IF J=0 THEN 9416
9410  IF I[J]=0 THEN 9422
9412  GOSUB 9100
9414  N[I,K]=FNC(B-C[I])
9416  IF N[I,K]<125 OR N[I,K]>235 OR Z[I,5] THEN 9420
9418  M[I,K]=J
9420  RETURN
9422  V=I[I]
9424  IF V>1 THEN 9430
9426  GOSUB 9050
9428  PRINT "   PHASER  "K"DISENGAGING."
9430  M[I,K]=0
9432  RETURN
9500  REM	  ----- TORPEDO TRACKING ROUTINE -----
9502  J=T[I,K]
9504  IF J<100 THEN 9508
9506  J=J-100
9508  IF J=0 THEN 9516
9510  IF I[J]=0 THEN 9522
9512  GOSUB 9100
9514  U[I,K]=FNC(B-C[I])
9516  IF U[I,K]<135 OR U[I,K]>225 OR Z[I,5] THEN 9520
9518  T[I,K]=J
9520  RETURN
9522  V=I[I]
9524  IF V>1 THEN 9530
9526  GOSUB 9050
9528  PRINT "   TUBE  "K"DISENGAGING."
9530  T[I,K]=0
9532  RETURN
9600  REM	  ----- PHASER HIT FACTOR SUBROUTINE -----
9602  F=0
9604  F1=M[I,K1+2]*Q[I,K]*.01
9606  GOSUB 9100
9608  F2=1000
9610  G2=SQR((X[I]-X[J])^2+(Y[I]-Y[J])^2)
9612  IF G2>F2 THEN 9622
9614  F3=M[I,K1+1]
9616  G3=FNC(C[I]+N[I,K]-B)
9618  IF G3>F3 AND 360-G3>F3 THEN 9622
9620  F=INT(F1*SQR(1-G2/F2)*45/F3)
9622  RETURN
9700  REM	  ----- ANTIMATTER HIT FACTOR SUBROUTINE -----
9702  F=0
9703  F1=F[I]*5
9704  G2=SQR((X[I]-X[J])^2+(Y[I]-Y[J])^2)
9706  F2=F1*10
9708  IF G2>F2 THEN 9712
9710  F=INT(F1*SQR(1-G2/F2))
9712  RETURN
9800  REM	  ----- DAMAGE ASSESSMENT SUBROUTINE -----
9802  GOSUB 9100
9804  B1=FNC(B-C[J]+180)
9806  S=1
9808  IF B1<45 OR B1>315 THEN 9820
9810  S=2
9812  IF B1<135 THEN 9820
9814  S=3
9816  IF B1<225 THEN 9820
9818  S=4
9820  PRINT "HIT  "F"ON "V$"'S SHIELD"S
9822  READ Q1,Q2,Q3,Q4,Q5,Q6
9824  H=F*(1-S[J,S]*S[J,S+4]/100)
9826  E[J]=E[J]+H/Q1
9828  F[J]=F[J]+H/Q2 MAX 0
9830  G[J]=G[J]+H/Q3 MAX 0
9832  IF S>1 THEN 9836
9834  Q4=Q4*1.5
9836  S[J,S+4]=S[J,S+4]-F/Q4 MAX 0
9838  Z[J,6]=Z[J,6]-FNR(H*Q5) MAX 0
9839  L9=0
9840  FOR H1=1 TO H/Q6
9842  L=FNR(K1+K2)
9844  IF L>K1 THEN 9858
9846  IF M[J,L]<0 THEN 9870
9848  M[J,L]=-1
9850  Q[J,L]=R[J,L]=0
9852  IF J>1 THEN 9870
9853  L9=1
9854  PRINT  USING 9855;L
9855  IMAGE  #,"   PHAS ",D
9856  GOTO 9870
9858  L=L-K1
9860  IF T[J,L]<0 THEN 9870
9862  T[J,L]=-1
9864  V[J,L]=0
9866  IF J>1 THEN 9870
9867  L9=1
9868  PRINT  USING 9869;L
9869  IMAGE  #,"   TUBE ",D
9870  NEXT H1
9871  IF  NOT L9 THEN 9873
9872  PRINT "   DAMAGED."
9873  FOR L=1 TO 4
9874  READ Q,X$
9876  IF H<FNR(Q) THEN 9886
9878  IF Z[J,L] THEN 9886
9880  Z[J,L]=1
9881  IF J=1 THEN 9884
9882  IF X$[1,1]#"W" THEN 9886
9883  PRINT "[]";
9884  PRINT "   "X$
9886  NEXT L
9888  IF H<40 THEN 9892
9890  K[J]=10000
9892  D4=D1
9894  GOSUB 9900
9896  RETURN
9900  REM	  ----- DISTRIBUTION SUBROUTINE -----
9902  H=F[J]+G[J]*D4
9904  FOR L=1 TO K1
9906  IF M[J,L]<0 OR R[J,L] >= 0 THEN 9910
9907  Q=-R[J,L]*D4 MIN Q[J,L]
9908  Q[J,L]=Q[J,L]-Q
9909  H=H+Q
9910  NEXT L
9912  FOR L=1 TO 4
9913  IF  NOT S[J,L+4] THEN 9922
9916  H1=S[J,L]*D4 MIN H
9918  H=H-H1
9920  S[J,L]=H1/D4
9922  NEXT L
9924  IF H=0 THEN 9938
9926  FOR L=1 TO K1
9927  IF Q[J,L] >= 10 THEN 9936
9928  IF M[J,L]<0 THEN 9936
9929  IF R[J,L]<0 THEN 9936
9930  H1=H MIN 10-Q[J,L] MIN R[J,L]*D4
9932  H=H-H1
9934  Q[J,L]=Q[J,L]+H1
9936  NEXT L
9938  F[J]=H MIN H[J]
9940  H=H-F[J]
9942  IF H <= 0 THEN 9958
9944  FOR L=1 TO K1
9946  IF M[J,L]<0 THEN 9956
9948  H1=10-Q[J,L] MIN H
9950  Q[J,L]=Q[J,L]+H1
9952  H=H-H1
9954  IF H <= 0 THEN 9958
9956  NEXT L
9958  RETURN
9999  END