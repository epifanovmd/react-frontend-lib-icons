import React, { FC, memo } from 'react';
import SignDirectionRemoveSvg from '../svg/sign-direction-remove.svg';

export interface ISignDirectionRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignDirectionRemoveIcon: FC<ISignDirectionRemoveIconProps> = memo(props => {
  return <SignDirectionRemoveSvg {...props} />;
});
