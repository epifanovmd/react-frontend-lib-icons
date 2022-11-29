import React, { FC, memo } from 'react';
import LockQuestionSvg from '../svg/lock-question.svg';

export interface ILockQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockQuestionIcon: FC<ILockQuestionIconProps> = memo(props => {
  return <LockQuestionSvg {...props} />;
});
