import React, { FC, memo } from 'react';
import AlphabetTengwarSvg from '../svg/alphabet-tengwar.svg';

export interface IAlphabetTengwarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabetTengwarIcon: FC<IAlphabetTengwarIconProps> = memo(props => {
  return <AlphabetTengwarSvg {...props} />;
});
