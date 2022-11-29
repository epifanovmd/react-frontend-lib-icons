import React, { FC, memo } from 'react';
import AccountQuestionOutlineSvg from '../svg/account-question-outline.svg';

export interface IAccountQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountQuestionOutlineIcon: FC<IAccountQuestionOutlineIconProps> = memo(props => {
  return <AccountQuestionOutlineSvg {...props} />;
});
