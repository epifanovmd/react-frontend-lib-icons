import React, { FC, memo } from 'react';
import FirebaseSvg from '../svg/firebase.svg';

export interface IFirebaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FirebaseIcon: FC<IFirebaseIconProps> = memo(props => {
  return <FirebaseSvg {...props} />;
});
