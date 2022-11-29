import React, { FC, memo } from 'react';
import RenameOutlineSvg from '../svg/rename-outline.svg';

export interface IRenameOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RenameOutlineIcon: FC<IRenameOutlineIconProps> = memo(props => {
  return <RenameOutlineSvg {...props} />;
});
