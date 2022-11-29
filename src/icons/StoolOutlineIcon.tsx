import React, { FC, memo } from 'react';
import StoolOutlineSvg from '../svg/stool-outline.svg';

export interface IStoolOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoolOutlineIcon: FC<IStoolOutlineIconProps> = memo(props => {
  return <StoolOutlineSvg {...props} />;
});
