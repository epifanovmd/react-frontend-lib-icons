import React, { FC, memo } from 'react';
import RelationManyToOnlyOneSvg from '../svg/relation-many-to-only-one.svg';

export interface IRelationManyToOnlyOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationManyToOnlyOneIcon: FC<IRelationManyToOnlyOneIconProps> = memo(props => {
  return <RelationManyToOnlyOneSvg {...props} />;
});
