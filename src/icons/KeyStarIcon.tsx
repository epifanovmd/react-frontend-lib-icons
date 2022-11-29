import React, { FC, memo } from 'react';
import KeyStarSvg from '../svg/key-star.svg';

export interface IKeyStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyStarIcon: FC<IKeyStarIconProps> = memo(props => {
  return <KeyStarSvg {...props} />;
});
