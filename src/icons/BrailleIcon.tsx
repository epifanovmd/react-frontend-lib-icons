import React, { FC, memo } from 'react';
import BrailleSvg from '../svg/braille.svg';

export interface IBrailleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrailleIcon: FC<IBrailleIconProps> = memo(props => {
  return <BrailleSvg {...props} />;
});
