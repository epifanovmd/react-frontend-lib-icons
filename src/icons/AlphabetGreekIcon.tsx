import React, { FC, memo } from 'react';
import AlphabetGreekSvg from '../svg/alphabet-greek.svg';

export interface IAlphabetGreekIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabetGreekIcon: FC<IAlphabetGreekIconProps> = memo(props => {
  return <AlphabetGreekSvg {...props} />;
});
