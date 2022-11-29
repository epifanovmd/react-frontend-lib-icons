import React, { FC, memo } from 'react';
import AlphabetLatinSvg from '../svg/alphabet-latin.svg';

export interface IAlphabetLatinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabetLatinIcon: FC<IAlphabetLatinIconProps> = memo(props => {
  return <AlphabetLatinSvg {...props} />;
});
