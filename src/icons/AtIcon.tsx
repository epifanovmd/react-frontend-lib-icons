import React, { FC, memo } from 'react';
import AtSvg from '../svg/at.svg';

export interface IAtIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AtIcon: FC<IAtIconProps> = memo(props => {
  return <AtSvg {...props} />;
});
