import React, { FC, memo } from 'react';
import AlphabeticalSvg from '../svg/alphabetical.svg';

export interface IAlphabeticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabeticalIcon: FC<IAlphabeticalIconProps> = memo(props => {
  return <AlphabeticalSvg {...props} />;
});
