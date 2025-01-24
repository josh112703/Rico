import { Component } from "@angular/core";

@Component({
    selector: "post-create",
    templateUrl: "./post.create.component.html",
    styleUrls: ["./post.create.component.css"],
})

export class PostCreateComponent {
     NewPost = 'this is a new post';
     PostInput= '';
    onAddPost(){

        this.NewPost = this.PostInput;
    };
}