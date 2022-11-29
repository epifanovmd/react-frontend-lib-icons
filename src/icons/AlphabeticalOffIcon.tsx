import React, { FC, memo } from 'react';
import AlphabeticalOffSvg from '../svg/alphabetical-off.svg';

export interface IAlphabeticalOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabeticalOffIcon: FC<IAlphabeticalOffIconProps> = memo(props => {
  return <AlphabeticalOffSvg {...props} />;
});
