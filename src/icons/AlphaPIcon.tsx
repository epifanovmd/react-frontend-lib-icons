import React, { FC, memo } from 'react';
import AlphaPSvg from '../svg/alpha-p.svg';

export interface IAlphaPIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaPIcon: FC<IAlphaPIconProps> = memo(props => {
  return <AlphaPSvg {...props} />;
});
