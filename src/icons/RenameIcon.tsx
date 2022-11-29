import React, { FC, memo } from 'react';
import RenameSvg from '../svg/rename.svg';

export interface IRenameIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RenameIcon: FC<IRenameIconProps> = memo(props => {
  return <RenameSvg {...props} />;
});
