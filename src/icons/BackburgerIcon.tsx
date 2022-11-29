import React, { FC, memo } from 'react';
import BackburgerSvg from '../svg/backburger.svg';

export interface IBackburgerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BackburgerIcon: FC<IBackburgerIconProps> = memo(props => {
  return <BackburgerSvg {...props} />;
});
