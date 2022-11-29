import React, { FC, memo } from 'react';
import ColorHelperSvg from '../svg/color-helper.svg';

export interface IColorHelperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ColorHelperIcon: FC<IColorHelperIconProps> = memo(props => {
  return <ColorHelperSvg {...props} />;
});
