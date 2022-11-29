import React, { FC, memo } from 'react';
import FindReplaceSvg from '../svg/find-replace.svg';

export interface IFindReplaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FindReplaceIcon: FC<IFindReplaceIconProps> = memo(props => {
  return <FindReplaceSvg {...props} />;
});
