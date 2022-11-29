import React, { FC, memo } from 'react';
import DresserOutlineSvg from '../svg/dresser-outline.svg';

export interface IDresserOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DresserOutlineIcon: FC<IDresserOutlineIconProps> = memo(props => {
  return <DresserOutlineSvg {...props} />;
});
