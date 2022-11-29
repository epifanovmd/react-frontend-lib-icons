import React, { FC, memo } from 'react';
import FormatLineSpacingSvg from '../svg/format-line-spacing.svg';

export interface IFormatLineSpacingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLineSpacingIcon: FC<IFormatLineSpacingIconProps> = memo(props => {
  return <FormatLineSpacingSvg {...props} />;
});
