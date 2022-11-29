import React, { FC, memo } from 'react';
import AlphabetCyrillicSvg from '../svg/alphabet-cyrillic.svg';

export interface IAlphabetCyrillicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabetCyrillicIcon: FC<IAlphabetCyrillicIconProps> = memo(props => {
  return <AlphabetCyrillicSvg {...props} />;
});
