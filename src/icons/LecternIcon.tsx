import React, { FC, memo } from 'react';
import LecternSvg from '../svg/lectern.svg';

export interface ILecternIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LecternIcon: FC<ILecternIconProps> = memo(props => {
  return <LecternSvg {...props} />;
});
