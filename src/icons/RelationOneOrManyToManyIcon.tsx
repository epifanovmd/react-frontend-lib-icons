import React, { FC, memo } from 'react';
import RelationOneOrManyToManySvg from '../svg/relation-one-or-many-to-many.svg';

export interface IRelationOneOrManyToManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneOrManyToManyIcon: FC<IRelationOneOrManyToManyIconProps> = memo(props => {
  return <RelationOneOrManyToManySvg {...props} />;
});
