import React, { FC, memo } from 'react';
import AlphaASvg from '../svg/alpha-a.svg';

export interface IAlphaAIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaAIcon: FC<IAlphaAIconProps> = memo(props => {
  return <AlphaASvg {...props} />;
});
