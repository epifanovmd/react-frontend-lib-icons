import React, { FC, memo } from 'react';
import AlphabetPiqadSvg from '../svg/alphabet-piqad.svg';

export interface IAlphabetPiqadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabetPiqadIcon: FC<IAlphabetPiqadIconProps> = memo(props => {
  return <AlphabetPiqadSvg {...props} />;
});
