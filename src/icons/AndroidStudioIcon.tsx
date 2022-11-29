import React, { FC, memo } from 'react';
import AndroidStudioSvg from '../svg/android-studio.svg';

export interface IAndroidStudioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AndroidStudioIcon: FC<IAndroidStudioIconProps> = memo(props => {
  return <AndroidStudioSvg {...props} />;
});
