import React, { FC, memo } from 'react';
import CowOffSvg from '../svg/cow-off.svg';

export interface ICowOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CowOffIcon: FC<ICowOffIconProps> = memo(props => {
  return <CowOffSvg {...props} />;
});
