import React, { FC, memo } from 'react';
import RolodexOutlineSvg from '../svg/rolodex-outline.svg';

export interface IRolodexOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RolodexOutlineIcon: FC<IRolodexOutlineIconProps> = memo(props => {
  return <RolodexOutlineSvg {...props} />;
});
