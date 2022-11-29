import React, { FC, memo } from 'react';
import CowSvg from '../svg/cow.svg';

export interface ICowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CowIcon: FC<ICowIconProps> = memo(props => {
  return <CowSvg {...props} />;
});
