import React, { FC, memo } from 'react';
import FormatSectionSvg from '../svg/format-section.svg';

export interface IFormatSectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatSectionIcon: FC<IFormatSectionIconProps> = memo(props => {
  return <FormatSectionSvg {...props} />;
});
