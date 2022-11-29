import React, { FC, memo } from 'react';
import AnsibleSvg from '../svg/ansible.svg';

export interface IAnsibleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnsibleIcon: FC<IAnsibleIconProps> = memo(props => {
  return <AnsibleSvg {...props} />;
});
