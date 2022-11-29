import React, { FC, memo } from 'react';
import KubernetesSvg from '../svg/kubernetes.svg';

export interface IKubernetesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KubernetesIcon: FC<IKubernetesIconProps> = memo(props => {
  return <KubernetesSvg {...props} />;
});
