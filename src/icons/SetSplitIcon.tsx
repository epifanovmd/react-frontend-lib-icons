import React, { FC, memo } from 'react';
import SetSplitSvg from '../svg/set-split.svg';

export interface ISetSplitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetSplitIcon: FC<ISetSplitIconProps> = memo(props => {
  return <SetSplitSvg {...props} />;
});
