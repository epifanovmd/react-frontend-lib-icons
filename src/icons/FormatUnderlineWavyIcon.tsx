import React, { FC, memo } from 'react';
import FormatUnderlineWavySvg from '../svg/format-underline-wavy.svg';

export interface IFormatUnderlineWavyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatUnderlineWavyIcon: FC<IFormatUnderlineWavyIconProps> = memo(props => {
  return <FormatUnderlineWavySvg {...props} />;
});
