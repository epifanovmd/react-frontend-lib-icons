import React, { FC, memo } from 'react';
import BabelSvg from '../svg/babel.svg';

export interface IBabelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabelIcon: FC<IBabelIconProps> = memo(props => {
  return <BabelSvg {...props} />;
});
