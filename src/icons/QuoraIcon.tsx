import React, { FC, memo } from 'react';
import QuoraSvg from '../svg/quora.svg';

export interface IQuoraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QuoraIcon: FC<IQuoraIconProps> = memo(props => {
  return <QuoraSvg {...props} />;
});
