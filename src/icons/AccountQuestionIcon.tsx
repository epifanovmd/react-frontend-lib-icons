import React, { FC, memo } from 'react';
import AccountQuestionSvg from '../svg/account-question.svg';

export interface IAccountQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountQuestionIcon: FC<IAccountQuestionIconProps> = memo(props => {
  return <AccountQuestionSvg {...props} />;
});
