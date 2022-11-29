import React, { FC, memo } from 'react';
import RenameBoxSvg from '../svg/rename-box.svg';

export interface IRenameBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RenameBoxIcon: FC<IRenameBoxIconProps> = memo(props => {
  return <RenameBoxSvg {...props} />;
});
