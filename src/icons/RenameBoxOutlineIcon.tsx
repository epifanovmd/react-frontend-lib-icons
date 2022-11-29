import React, { FC, memo } from 'react';
import RenameBoxOutlineSvg from '../svg/rename-box-outline.svg';

export interface IRenameBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RenameBoxOutlineIcon: FC<IRenameBoxOutlineIconProps> = memo(props => {
  return <RenameBoxOutlineSvg {...props} />;
});
