import React, { FC, memo } from 'react';
import AndroidSvg from '../svg/android.svg';

export interface IAndroidIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AndroidIcon: FC<IAndroidIconProps> = memo(props => {
  return <AndroidSvg {...props} />;
});
